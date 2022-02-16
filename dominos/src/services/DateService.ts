class DateService {
  private options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  };

  // eslint-disable-next-line class-methods-use-this
  toDate(value: string): Date {
    return new Date(value);
  }

  localString(value: string) : string {
    return this.toDate(value).toLocaleString('ru', this.options);
  }
}

export default new DateService();
