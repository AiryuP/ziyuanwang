import { Controller,Post,Body,Inject,Get,Query } from '@nestjs/common';
import { UserService } from './user.service';
import { EmailService } from '../email/email.service';
import { RedisService } from "../redis/redis.service";

import { RegisterUserDto } from "./dto/register-user.dto";
import { LoginUserDto } from "./dto/login-user.dto"

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Inject(EmailService)
  private emailService: EmailService;

  @Inject(RedisService)
  private redisService: RedisService;

  @Get('register-captcha')
  async captcha(@Query('address') address: string) {
      const code = Math.random().toString().slice(2,8);

      await this.redisService.set(`captcha_${address}`, code, 5 * 60);

      await this.emailService.sendMail({
        to: address,
        subject: '注册验证码',
        html: `<p>你的注册验证码是 ${code}</p>`
      });
      return '发送成功';
  }

  @Post('register')
  async register(@Body() registerUser: RegisterUserDto) {
      console.log(registerUser);
      // return "success"
      return await this.userService.register(registerUser);
  }

  @Post('login')
  async login(@Body() loginUser: LoginUserDto ){
    console.log(loginUser);

    // return await this.userService.register(registerUser);
    return loginUser
  }




}
