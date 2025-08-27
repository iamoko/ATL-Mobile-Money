import { Request, Response, NextFunction } from "express";
import { validation_error } from "../utils";

const Joi = require("joi").extend(require("@joi/date"));

/**
 * Login Parameters`
 */
export const login = (req: Request, res: Response, next: NextFunction) => {
  const { error } = Joi.object({
    phone: Joi.number().integer().positive().required(),
    password: Joi.string().trim().required(),
  }).validate(req.body);

  if (error) return validation_error(res, error.details[0].message);
  next();
};

/**
 * Add cargo owner validation
 * @param req
 * @param res
 * @param next
 * @returns
 */
export const cargoOwner = (req: Request, res: Response, next: NextFunction) => {
  const { error } = Joi.object({
    company_id: Joi.number().integer().positive().required(),
    name: Joi.string().trim().min(3).required(),
    address: Joi.string().trim().min(3).required(),
    phone: Joi.string().trim().min(12).max(12).required(),
  }).validate(req.body);

  if (error) return validation_error(res, error.details[0].message);
  next();
};

export const company = (req: Request, res: Response, next: NextFunction) => {
  const { error } = Joi.object({
    name: Joi.string().trim().min(3).required(),
    address: Joi.string().trim().min(3).required(),
  }).validate(req.body);

  if (error) return validation_error(res, error.details[0].message);
  next();
};

/** ID */
export const id = (req: Request, res: Response, next: NextFunction) => {
  const { error } = Joi.object({
    id: Joi.number().integer().positive().required(),
  }).validate(req.body);

  if (error) return validation_error(res, error.details[0].message);
  next();
};

/**
 * Notification point for company
 */
export const point = (req: Request, res: Response, next: NextFunction) => {
  const { error } = Joi.object({
    id: Joi.number().integer().positive().required(),
    template: Joi.string().trim().required(),
    location: Joi.string().required(),
    latitude: Joi.number().min(-90).max(90).required(),
    longitude: Joi.number().min(-180).max(180).required(),
  }).validate(req.body);

  if (error) return validation_error(res, error.details[0].message);
  next();
};

/**
 * Notification point contact
 */
export const point_contact = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { error } = Joi.object({
    point_id: Joi.number().integer().positive().required(),
    name: Joi.string().trim().required(),
    phone: Joi.string().trim().min(12).max(12).required(),
  }).validate(req.body);

  if (error) return validation_error(res, error.details[0].message);
  next();
};

/** Whatsapp */
/**
 * Whatsapp Message
 */
export const whatsapp = (req: Request, res: Response, next: NextFunction) => {
  const { error } = Joi.object({
    phone: Joi.string().trim().min(12).max(12).required(),
    message: Joi.string().trim().required(),
  }).validate(req.body);

  if (error) return validation_error(res, error.details[0].message);
  next();
};
