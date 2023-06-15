# 💻 Customer Success Balancing Challenge

[![Node.js CI](https://github.com/Cleok3Lima/CustomerSuccessBalancing-challenge/actions/workflows/node.js.yml/badge.svg)](https://github.com/Cleok3Lima/CustomerSuccessBalancing-challenge/actions/workflows/node.js.yml)

This project is part of a coding challenge where the task was to implement a JavaScript solution that assigns and retrieves the ID of the Customer Success with the highest number of clients. It was part of an interview challenge.

## Requirements

The requirements are in the README file inside the <code>./challenge/javascript</code> folder

## Teste

```sh
# enter the desired language directory
cd challenge/javascript

# install dependencies
npm i

# run tests
npm test

```

## Challenge Description

The challenge description is in **Portuguese** in the README file inside the <code>./challenge</code> folder

## Progress History

I started this challenge quite anxious, as I had done badly in other challenges just before this one. I studied a lot and was about to test everything I had learned so far.

I started by trying to implement a simple solution returning only an array with the customer counters and then separate them, but when I looked at the console I realized that repeated customers for different Customer Success were being added up. I realized I was not deleting the customers that already had a corresponding Customer Success. I went back in the code where I made this modification.

In the end my code was only passing 5 tests. Researching I realized that I could use _new Set_ instead of _new Array_ for my solution. After implementing it and applying a bit of refactoring the code passed all the tests.

## Solution

The provided solution follows these steps:

1. Checks for empty lists of customers and CS managers.
2. Creates a set of waiting customers.
3. Filters and sorts the available CS managers based on their scores.
4. Counts the number of customers each CS manager can handle.
5. Returns the ID of the CS manager with the highest number of customers, or 0 in case of a tie.

## Complexity Analysis

- Checking for empty lists:

  - O(1)

- Creating a customer set:

  - O(m)

- Filtering and sorting the Customer Success available:

  - O(n log n)

- Count of customers attended by each Customer Success:
  - O(nm)

The overall complexity of the algorithm is dominated by the customer counting step, resulting in a time complexity of **O(nm)**.

## Conclusion

This project demonstrates a JavaScript implementation for assigning and retrieving the ID of the Customer Success manager with the highest number of clients. The solution takes into account the capacity of each CS manager, the sizes of the clients, and the unavailability of CS managers. By following the provided steps, the function efficiently balances the workload among the CS managers.

This implementation successfully passed all the provided test cases, ensuring that it functions correctly in various scenarios.

## GitHub Actions

I thought it would be fun to add a GitHub Action to the project and took the opportunity to add the badge at the beginning of this document. 😊💜
