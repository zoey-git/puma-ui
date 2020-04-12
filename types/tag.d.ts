import { PumaUIComponent } from './component'

export type TagType = 'primary' | 'gray' | 'success' | 'warning' | 'danger'
export type TagTheme = 'dark' | 'light' | 'plain'

export declare class PmTag extends PumaUIComponent {
    type: TagType
    closable: Boolean
    hit: Boolean
    color: string
    effect: TagTheme
}