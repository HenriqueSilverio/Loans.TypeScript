/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable max-classes-per-file */

export interface Specification<T> {
  isSatisfiedBy(candidate: T): boolean
  And(other: Specification<T>): Specification<T>
  Or(other: Specification<T>): Specification<T>
}

export default abstract class CompositeSpecification<T> implements Specification<T> {
  public abstract isSatisfiedBy(candidate: T): boolean

  public And(other: Specification<T>): Specification<T> {
    return new AndSpecification(this, other)
  }

  public Or(other: Specification<T>): Specification<T> {
    return new OrSpecification(this, other)
  }
}

export class AndSpecification<T> extends CompositeSpecification<T> {
  private readonly left: Specification<T>

  private readonly right: Specification<T>

  constructor(left: Specification<T>, right: Specification<T>) {
    super()
    this.left = left
    this.right = right
  }

  public isSatisfiedBy(candidate: T): boolean {
    return this.left.isSatisfiedBy(candidate) && this.right.isSatisfiedBy(candidate)
  }
}

export class OrSpecification<T> extends CompositeSpecification<T> {
  private readonly left: Specification<T>

  private readonly right: Specification<T>

  constructor(left: Specification<T>, right: Specification<T>) {
    super()
    this.left = left
    this.right = right
  }

  public isSatisfiedBy(candidate: T): boolean {
    return this.left.isSatisfiedBy(candidate) || this.right.isSatisfiedBy(candidate)
  }
}
