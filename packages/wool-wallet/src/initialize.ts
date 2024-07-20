import { registerWallet, DEPRECATED_registerWallet } from './register.js';
import { WoolWallet } from './wallet.js';
import type { Wool } from './window.js';

export type { Wool };

export function initialize(wool: Wool): void {
    registerWallet(new WoolWallet(wool));
}

/**
 * @deprecated Use {@link initialize} instead.
 */
export function DEPRECATED_initialize(wool: Wool): void {
    DEPRECATED_registerWallet(new WoolWallet(wool));
}
