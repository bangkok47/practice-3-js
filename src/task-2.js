export default class EnhancedSet extends Set {
  union(s) {
    return new EnhancedSet([...this, ...s]);
  }

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

  difference(s) {
    const onlyThis = new EnhancedSet([...this]);

    for (let item of s.values()) {
      if (onlyThis.has(item)) {
        onlyThis.delete(item);
      }
    }
    return onlyThis;
  }

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

  isSuperset(s) {
    for (let item of s.values()) {
      if (!this.has(item)) {
        return false;
      }
    }
    return true;
  }

  isSubset(s) {
    for (let item of this.values()) {
      if (!s.has(item)) {
        return false;
      }
    }
    return true;
  }
}
