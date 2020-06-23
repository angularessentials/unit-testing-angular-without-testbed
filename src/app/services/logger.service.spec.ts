import { LoggerService } from './logger.service';

describe('LoggerService', () => {
  const service = new LoggerService();

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should log a given info message', () => {
    spyOn(console, 'log');
    service.info('info test message');
    expect(console.log).toHaveBeenCalledWith('info test message');
  });

  it('should log a given error message', () => {
    spyOn(console, 'error');
    service.error('error test message');
    expect(console.error).toHaveBeenCalledWith('error test message');
  });
});
