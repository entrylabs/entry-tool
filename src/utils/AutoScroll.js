import { CommonUtils } from './Common';

export default class AutoScroller {
    constructor(container, onScrollCallback) {
        this.container = container;
        this.onScrollCallback = onScrollCallback;
        this.getContainerRect = _.memoize(() => this.container.getBoundingClientRect());
    }

    clear() {
        clearInterval(this.interval);
        this.interval = null;
    }

    reset() {
        this.getContainerRect.cache = new _.memoize.Cache();
        this.clear();
        this.isAutoScrolling = false;
    }

    update({ x, y }) {
        const direction = {
            x: 0,
            y: 0,
        };
        const speed = {
            x: 1,
            y: 1,
        };
        const acceleration = {
            x: 10,
            y: 10,
        };

        const { top, bottom, height } = this.getContainerRect();
        const checkAreaSize = height * 0.15;
        if (top < y && top + checkAreaSize > y) {
            direction.y = -1;
            speed.y =
                acceleration.y *
                Math.abs((1 - CommonUtils.getScaleNumber(y, top, top + checkAreaSize, 0, 1)) ** 3);
        } else if (bottom > y && bottom - checkAreaSize < y) {
            direction.y = 1;
            speed.y =
                acceleration.y *
                Math.abs(CommonUtils.getScaleNumber(y, bottom - checkAreaSize, bottom, 0, 1) ** 3);
        }

        if (this.interval) {
            this.clear();
        }

        if (direction.x !== 0 || direction.y !== 0) {
            this.isAutoScrolling = true;
            this.interval = setInterval(() => {
                const offset = {
                    left: speed.x * direction.x,
                    top: speed.y * direction.y,
                };
                this.container.scrollTop += offset.top;
                this.container.scrollLeft += offset.left;

                if (this.onScrollCallback) {
                    this.onScrollCallback(offset);
                }
            }, 5);
        }
    }
}
