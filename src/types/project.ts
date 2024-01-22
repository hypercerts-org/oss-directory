/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * A project is a collection of artifacts
 */
export interface Project {
  version: number;
  slug: string;
  name: string;
  github?: URL[];
  npm?: URL[];
  blockchain?: BlockchainAddress[];
  [k: string]: unknown;
}
/**
 * A generic URL
 */
export interface URL {
  url: string;
  [k: string]: unknown;
}
/**
 * An address on a blockchain
 */
export interface BlockchainAddress {
  address: string;
  /**
   * @minItems 1
   */
  tags: [
    (
      | "eoa"
      | "safe"
      | "creator"
      | "deployer"
      | "factory"
      | "proxy"
      | "contract"
      | "wallet"
    ),
    ...(
      | "eoa"
      | "safe"
      | "creator"
      | "deployer"
      | "factory"
      | "proxy"
      | "contract"
      | "wallet"
    )[],
  ];
  /**
   * @minItems 1
   */
  networks: [
    "mainnet" | "optimism" | "arbitrum",
    ...("mainnet" | "optimism" | "arbitrum")[],
  ];
  name?: string;
  [k: string]: unknown;
}
