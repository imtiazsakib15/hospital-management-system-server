import { NextFunction, Request, Response } from 'express';
import { Schedule } from '../model/schedule.model';
import httpStatus from 'http-status';
import sendResponse from '../utils/sendResponse';
import { generateId } from '../utils/generateId';
import moment from 'moment';

const createSchedule = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { schedule } = req.body;
    const scheduleInfo = {
      id: await generateId(Schedule),
      date: moment().format('L'),
      ...schedule,
    };
    const result = await Schedule.create(scheduleInfo);

    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: 'Schedule created',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getAllSchedules = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const schedules = await Schedule.find({})
      .populate('doctor')
      .populate('hospital')
      .populate('specialization');

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Schedules retrieved',
      data: schedules,
    });
  } catch (error) {
    next(error);
  }
};

const getASchedule = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const schedule = await Schedule.findOne({ id })
      .populate('doctor')
      .populate('hospital')
      .populate('specialization');

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Schedule retrieved',
      data: schedule,
    });
  } catch (error) {
    next(error);
  }
};

const updateSchedule = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const { schedule } = req.body;
    const result = await Schedule.updateOne({ id }, schedule, { new: true });

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Schedule updated',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const deleteSchedule = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const result = await Schedule.deleteOne({ id });

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Schedule deleted',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const scheduleControllers = {
  createSchedule,
  getAllSchedules,
  getASchedule,
  updateSchedule,
  deleteSchedule,
};
