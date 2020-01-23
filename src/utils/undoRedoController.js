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
        console.log('CALLED');
        const target = this.history[step];
        const { action, row, col, value, table, updateFunc } = target;
        if (!col) {
            //row operation
            if (isUndo) {
                if (action === 'ADD') {
                    updateFunc(table.splice(row, 1));
                    updateFunc(table);
                } else if (action === 'REMOVE') {
                    updateFunc(table.splice(row, 0, value));
                    updateFunc(table);
                }
            } else {
                if (action === 'ADD') {
                    updateFunc(table.splice(row, 0, value));
                    updateFunc(table);
                } else if (action === 'REMOVE') {
                    updateFunc(table.splice(row, 1));
                    updateFunc(table);
                }
            }
        } else if (!row) {
            //col operation
        } else {
            //cell operation
        }
    }
    clear() {
        this.history = [];
        this.step = -1;
        this.saveAction();
    }
}

export default UndoRedoController;
