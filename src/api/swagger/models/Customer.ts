/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Address } from './Address';

export type Customer = {
	id?: number;
	username?: string;
	address?: Array<Address>;
};
