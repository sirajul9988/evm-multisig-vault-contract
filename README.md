# EVM Multisig Vault

A production-ready, security-focused Multi-Signature wallet implementation. This contract allows a group of owners to manage shared funds, requiring a predefined number of approvals before any transaction can be executed on-chain.

## Core Logic
* **Transaction Submission**: Any owner can propose a transaction.
* **Confirmation**: Owners vote to approve the pending transaction.
* **Execution**: Once the threshold is met, anyone can trigger the execution.
* **Security**: Built-in guards against re-entrancy and unauthorized access.

## Technical Stack
* **Language**: Solidity ^0.8.20
* **Framework**: Hardhat / Foundry compatible
* **Standards**: Clean implementation of multisig logic without external dependencies for gas efficiency.

## How to Deploy
1. Provide an array of owner addresses.
2. Define the required number of signatures (e.g., 2 for a 2-of-3 setup).
3. Deploy to any EVM chain (Ethereum, Polygon, Arbitrum, etc.).
