import 'dotenv/config';
import * as Joi from 'joi';

interface EnvVars {
  PORT: number;
  STRIPE_SECRET: string;
}

const envSchema = Joi.object({
  PORT: Joi.number().required(),
  STRIPE_SECRET: Joi.string().required(),
}).unknown(true);

const { error, value } = envSchema.validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const envVars: EnvVars = value;

export const envs = {
  port: envVars.PORT,
  stripeSecret: envVars.STRIPE_SECRET,
}