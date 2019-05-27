import EntryPopupStyle from '@assets/entry/scss/popup.scss';
import EntryBackpackStyle from '@assets/entry/scss/widget/Backpack.scss';
import EntryProgress from '@assets/entry/scss/progress.scss';
import EntryLinePopupStyle from '@assets/entryline/scss/popup.scss';

class Theme {
    constructor() {
        this._type = 'entry';
        this.styles = {
            entry: {
                popup: EntryPopupStyle,
                backpack: EntryBackpackStyle,
                progress: EntryProgress,
            },
            entryline: {
                popup: EntryLinePopupStyle,
                backpack: EntryBackpackStyle,
                progress: EntryLinePopupStyle,
            },
        };
    }

    getStyle(str = 'popup') {
        if (this.styles[this.type] && this.styles[this.type][str]) {
            return this.styles[this._type][str];
        } else {
            return EntryPopupStyle;
        }
    }

    get type() {
        return this._type;
    }

    set type(value) {
        if (value) {
            this._type = value;
        }
    }
}

export default new Theme();
