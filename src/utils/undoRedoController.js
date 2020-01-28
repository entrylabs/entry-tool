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
        this.emitter.emit('modified');
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
        const { action, type, row, col, updateFunc, revertFunc } = target;
        if (isUndo) {
            revertFunc(col || row);
        } else {
            updateFunc(col || row);
        }
    }
    clear() {
        this.history = [];
        this.step = -1;
        this.saveAction();
    }
}

export default UndoRedoController;
