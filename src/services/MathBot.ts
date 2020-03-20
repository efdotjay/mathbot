
class MathBot {
  private statementRegex: RegExp = /(\d+)\s*([+\-*\/\%])\s*(\d+)/;

  private parseStatement(statement: string) {
    const match = statement.match(this.statementRegex);

    if(!match)
      return null;

    return {
      whole: match[0],
      num1: Number(match[1]),
      op: match[2],
      num2: Number(match[3])
    };
  }

  processMessage(message: string): string {
    const statement = this.parseStatement(message);
    if(!statement)
      throw new Error(`Sorry, I don't understand what do you mean by "${message}". I can only solve simple math expressions.`);

    const {num1, num2, op} = statement;
    let answer: number;

    switch(op){
      case '+': answer = num1 + num2; break;
      case '-': answer = num1 - num2; break;
      case '/': answer = num1 / num2; break;
      case '*': answer = num1 * num2; break;
      case '%': answer = num1 % num2; break;
      default: throw new Error(`Sorry, I don't know much about the "${op}" operator.`);
    }

    return `"${statement.whole}" equals ${answer}.`;
  }
}

export default MathBot;
