class AppError {
  public readonly message: string;
  public readonly statusCode: number;

  contructor(message: string, statusCode = 400) {
    this.message = message;
    this.statusCode = statusCode;
  }
}

export default AppError;
