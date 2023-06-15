/**
 * Returns the id of the CustomerSuccess with the most customers
 * @param {array} customerSuccess
 * @param {array} customers
 * @param {array} customerSuccessAway
 */
function customerSuccessBalancing(
  customerSuccess,
  customers,
  customerSuccessAway
) {
  /**
   * ===============================================
   * =========== Write your solution here ==========
   * ===============================================
   */

  // Checks empty lists
  if (customers.length === 0 || customerSuccess.length === 0) {
    customers.length === 0
      ? console.log("There is no costumers waiting")
      : console.log("There is no Customer Success available")
  }

  const waitingCustomers = new Set(customers)

  // Filter the available Customer Successes and sort them by score in ascending order
  const availableCustomerSuccess = customerSuccess
    .filter((cs) => !customerSuccessAway.includes(cs.id))
    .sort(
      (customerSuccess1, customerSuccess2) =>
        customerSuccess1.score - customerSuccess2.score
    )

  // Count how many customers each Customer Success can attend and store the results in an array
  const csCustomerCounts = availableCustomerSuccess.map(
    (customerSuccessData) => {
      let customerCount = 0

      for (const customer of waitingCustomers) {
        if (customer.score <= customerSuccessData.score) {
          waitingCustomers.delete(customer)
          customerCount++
        }
      }

      return {
        id: customerSuccessData.id,
        score: customerSuccessData.score,
        customerCount,
      }
    }
  )

  // Sort the Customer Successes by number of attended customers in descending order
  csCustomerCounts.sort((cs1, cs2) => cs2.customerCount - cs1.customerCount)

  // Check if there is a tie between the Customer Successes with the most attended customers
  const [highestCountCS, secondHighestCountCS] = csCustomerCounts

  // Return the ID of the Customer Success with the most attended customers, or 0 in case of a tie
  function getResult() {
    if (highestCountCS.customerCount === secondHighestCountCS.customerCount) {
      return 0
    } else {
      return highestCountCS.id
    }
  }

  return getResult()
}

test("Scenario 1", () => {
  const css = [
    { id: 1, score: 60 },
    { id: 2, score: 20 },
    { id: 3, score: 95 },
    { id: 4, score: 75 },
  ]
  const customers = [
    { id: 1, score: 90 },
    { id: 2, score: 20 },
    { id: 3, score: 70 },
    { id: 4, score: 40 },
    { id: 5, score: 60 },
    { id: 6, score: 10 },
  ]
  const csAway = [2, 4]

  expect(customerSuccessBalancing(css, customers, csAway)).toEqual(1)
})

function buildSizeEntities(size, score) {
  const result = []
  for (let i = 0; i < size; i += 1) {
    result.push({ id: i + 1, score })
  }
  return result
}

function mapEntities(arr) {
  return arr.map((item, index) => ({
    id: index + 1,
    score: item,
  }))
}

function arraySeq(count, startAt) {
  return Array.apply(0, Array(count)).map((it, index) => index + startAt)
}

test("Scenario 2", () => {
  const css = mapEntities([11, 21, 31, 3, 4, 5])
  const customers = mapEntities([10, 10, 10, 20, 20, 30, 30, 30, 20, 60])
  const csAway = []

  expect(customerSuccessBalancing(css, customers, csAway)).toEqual(0)
})

test("Scenario 3", () => {
  const testTimeoutInMs = 100
  const testStartTime = new Date().getTime()

  const css = mapEntities(arraySeq(999, 1))
  const customers = buildSizeEntities(10000, 998)
  const csAway = [999]

  expect(customerSuccessBalancing(css, customers, csAway)).toEqual(998)

  if (new Date().getTime() - testStartTime > testTimeoutInMs) {
    throw new Error(`Test took longer than ${testTimeoutInMs}ms!`)
  }
})

test("Scenario 4", () => {
  const css = mapEntities([1, 2, 3, 4, 5, 6])
  const customers = mapEntities([10, 10, 10, 20, 20, 30, 30, 30, 20, 60])
  const csAway = []

  expect(customerSuccessBalancing(css, customers, csAway)).toEqual(0)
})

test("Scenario 5", () => {
  const css = mapEntities([100, 2, 3, 6, 4, 5])
  const customers = mapEntities([10, 10, 10, 20, 20, 30, 30, 30, 20, 60])
  const csAway = []

  expect(customerSuccessBalancing(css, customers, csAway)).toEqual(1)
})

test("Scenario 6", () => {
  const css = mapEntities([100, 99, 88, 3, 4, 5])
  const customers = mapEntities([10, 10, 10, 20, 20, 30, 30, 30, 20, 60])
  const csAway = [1, 3, 2]

  expect(customerSuccessBalancing(css, customers, csAway)).toEqual(0)
})

test("Scenario 7", () => {
  const css = mapEntities([100, 99, 88, 3, 4, 5])
  const customers = mapEntities([10, 10, 10, 20, 20, 30, 30, 30, 20, 60])
  const csAway = [4, 5, 6]

  expect(customerSuccessBalancing(css, customers, csAway)).toEqual(3)
})

test("Scenario 8", () => {
  const css = mapEntities([60, 40, 95, 75])
  const customers = mapEntities([90, 70, 20, 40, 60, 10])
  const csAway = [2, 4]
  expect(customerSuccessBalancing(css, customers, csAway)).toEqual(1)
})
