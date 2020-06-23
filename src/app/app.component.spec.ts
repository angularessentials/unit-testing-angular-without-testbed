import { AppComponent } from './app.component';
import { LoggerService } from './services/logger.service';
const createSpyObject = jasmine.createSpyObj;

describe('AppComponent', () => {
  const loggerService: LoggerService = createSpyObject('LoggerService', ['info', 'error']);
  const component = new AppComponent(loggerService);

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should log a test message', () => {
    component.ngOnInit();
    expect(loggerService.info).toHaveBeenCalledWith('test');
  });

  it('should log an error when something goes wrong', () => {
    component.onError();
    expect(loggerService.error).toHaveBeenCalledWith('Something went wrong');
  });
});
