import { registerWallet } from './register.js';
import { WoolWallet } from './wallet.js';
import type { Wool } from './window.js';

export type { Wool };
export function initialize(wool: Wool): void {
    registerWallet(new WoolWallet(wool));
}
