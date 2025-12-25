import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

export class HttpRequestLoggerMiddleware implements NestMiddleware {
  private readonly logger = new Logger('HttpRequest');

  use(req: Request, res: Response, next: NextFunction) {
    const { method, originalUrl } = req;
    const now = process.hrtime();
    res.on('finish', () => {
      const duration = this.calculateRequestDuration(now);
      const d = duration.toFixed(2);
      this.logger.log(`${method} ${originalUrl} ${d}ms`);
    });
    next();
  }

  private calculateRequestDuration(startTime: [number, number]): number {
    const NS_PER_SEC = 1e9; // 1 billion
    const NS_TO_MS = 1e6; // 1 million
    const diff = process.hrtime(startTime);
    return (diff[0] * NS_PER_SEC + diff[1]) / NS_TO_MS;
  }
}
