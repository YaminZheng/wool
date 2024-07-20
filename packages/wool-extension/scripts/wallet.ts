import {
  PublicKey,
  Keypair,
  Transaction,
  VersionedTransaction,
  SendOptions,
  TransactionSignature,
} from "@solana/web3.js";
import {
  type SolanaSignInInput,
  type SolanaSignInOutput,
} from "@solana/wallet-standard-features";
import type { Wool } from "@wool0522/standard-wallet";
import EventEmitter from "eventemitter3";

const wallet = Keypair.generate();

export class WoolWallet extends EventEmitter implements Wool {
  publicKey: PublicKey | null = null;
  #isConnected: boolean = false;

  async connect(options?: { onlyIfTrusted?: boolean }) {
    console.log(options);
    if (this.#isConnected) {
      return { publicKey: this.publicKey! };
    }

    this.#isConnected = true;
    this.publicKey = wallet.publicKey;
    return { publicKey: this.publicKey };
  }
  async disconnect() {}
  async signAndSendTransaction<T extends Transaction | VersionedTransaction>(
    transaction: T,
    options?: SendOptions
  ): Promise<{
    signature: TransactionSignature;
  }> {
    return { signature: "" };
  }
  async signTransaction<T extends Transaction | VersionedTransaction>(
    transaction: T
  ): Promise<T> {
    return transaction;
  }
  async signAllTransactions<T extends Transaction | VersionedTransaction>(
    transactions: T[]
  ): Promise<T[]> {
    return transactions;
  }
  async signMessage(message: Uint8Array): Promise<{
    signature: Uint8Array;
  }> {
    return { signature: [] };
  }
  signIn(input?: SolanaSignInInput): Promise<SolanaSignInOutput> {
    return "" as any;
  }
}
