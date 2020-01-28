/*
type Action = {
   table
   setTableRef
}
*/
class UndoRedoController {
    constructor(emitter) {
        this.emitter = emitter;
        this.history = [];
        this.step = -1;
        this.isSkip = false;
    }

    // action = { table, row, col, value }
    saveAction(action) {
        if (this.step < this.history.length) {
            this.history = this.history.slice(0, this.step + 1);
        }
        this.history.push(action);
        this.emitter.emit('MODIFIED');
    }

    undo() {
        if (this.step === -1) return;
        this.updateData(this.step, true);
        this.step--;
    }

    redo() {
        if (this.step === this.history.length - 1) return;
        this.step++;
        this.updateData(this.step, false);
    }

    updateData(step, isUndo) {
        const target = this.history[step];
        const { action, type, updateFunc, revertFunc } = target;
        if (isUndo) {
            revertFunc();
        } else {
            updateFunc();
        }
    }
    clear() {
        this.history = [];
        this.step = -1;
        this.saveAction();
    }
}

export default UndoRedoController;
