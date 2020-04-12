import Vue from 'vue'
import { PumaUIComponent } from './component'

import { PmTag } from './tag'

export interface InstallationOptions {
    locale: any,
    i18n: any,
    size: string
}

export const version: string

export function install (vue: typeof Vue, options: InstallationOptions): void

export type Component = PumaUIComponent

export class Tag extends PmTag {}