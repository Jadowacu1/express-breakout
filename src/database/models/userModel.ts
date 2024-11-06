// Import validation decorators from the class-validator library
import { IsEmail, IsString, MinLength, MaxLength } from 'class-validator';

// Define the user class that will have valid`ation rules for its property
export class User {
  // Apply the IsEmail decorator to validate the email property
  // {} is an empty options object, followed by a custom error message if validation fails  
  @IsEmail({}, { message: 'Email must be valid'})
  email!: string; // Define email property as a required string (using '!' to bypass strict initialization checks)

  // Apply IsString decorator to ensure the password is a string
  @IsString()
  @MinLength(8, { message: 'Password must be at least 8 characters' })
  @MaxLength(20, { message: 'Password must not exceed 20 characters' })
  password!: string;

  constructor(email: string, password: string) {
    this.email;
    this.password;
  }
}

const user = new User('user01@gmail.com', '2121PassWord');
