// javascript 发布订阅模式
class EventEmitter {
  listener: Record<string, { fn: Function; once: boolean }[]>;
  constructor() {
    // 缓存列表
    this.listener = {};
  }

  // 订阅
  on(eventName: string, fn: Function) {
    const callbacks = this.listener[eventName];
    if (callbacks) callbacks.push({ fn, once: false });
    else this.listener[eventName] = [{ fn, once: false }];
  }

  // 取消订阅
  off(eventName: string, fn?: Function) {
    const callbacks = this.listener[eventName];
    if (!callbacks || !callbacks.length) return false;
    if (!fn) callbacks.splice(0, callbacks.length - 1);
    else
      this.listener[eventName] = callbacks.filter((event) => event.fn !== fn);
  }

  // 执行一次
  once(eventName: string, fn: Function) {
    const callbacks = this.listener[eventName];
    if (callbacks) callbacks.push({ fn, once: true });
    else this.listener[eventName] = [{ fn, once: true }];
  }

  // 发布
  emit(eventName: string, data: any) {
    const callbacks = this.listener[eventName];
    if (callbacks && callbacks.length) {
      callbacks.forEach((event) => {
        event.fn(data);
      });
      this.listener[eventName] = callbacks.filter((event) => !event.once);
    }
  }
}

export const eventEmitter = new EventEmitter();
