export default class EnhancedSet extends Set {
  // обьединяем this и s в один массив
  union(s) {
    return new EnhancedSet([...this, ...s]);
  }

  // делаем цикл в котором пробегаемся по массиву значений, в котором делаем
  // проверку если такое значение есть и в this и в s, то добавляем его в newSet
  intersection(s) {
    const merge = new EnhancedSet([...this, ...s]);
    const newSet = new EnhancedSet();

    for (let item of merge.values()) {
      if (this.has(item) && s.has(item)) {
        newSet.add(item);
      }
    }
    return newSet;
  }

  // создаем новый Set из this (это итерируемый обьект(массив))
  //пробегаемся циклом по каждому велью в s, если в onlyThis есть это велью, то
  // удаляем его и возвращаем onlyThis
  difference(s) {
    const onlyThis = new EnhancedSet([...this]);

    for (let item of s.values()) {
      if (onlyThis.has(item)) {
        onlyThis.delete(item);
      }
    }
    return onlyThis;
  }

  //делаем 2 цикла
  //в 1 пробегаемся по каждому велью this, и проверяем если в s такого нету,
  // тогда добавляем в newSet
  // во 2 цикле также, но пробегаемся по каждому велью s, и проверяем если такого
  // велью нету в this, добавляем в newSet
  symmetricDifference(s) {
    const newSet = new EnhancedSet();

    for (let item of this.values()) {
      if (!s.has(item)) {
        newSet.add(item);
      }
    }
    for (let item of s.values()) {
      if (!this.has(item)) {
        newSet.add(item);
      }
    }
    return newSet;
  }

  // циклом пробегаемся по каждому велью s, и проверяем если в this нету такого велью, тогда
  //return false  или true
  isSuperset(s) {
    for (let item of s.values()) {
      if (!this.has(item)) {
        return false;
      }
    }
    return true;
  }

  //циклом пробегаемся по каждому велью this, и проверяем если такого велью нету в s,
  // тогда false иначе true
  isSubset(s) {
    for (let item of this.values()) {
      if (!s.has(item)) {
        return false;
      }
    }
    return true;
  }
}
