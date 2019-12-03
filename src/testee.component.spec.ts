import { NgModule, Injectable, Optional, Component } from "@angular/core";
// import { NGXLogger } from 'ngx-logger';
// import { MessageService } from 'primeng/api';
import {
  MissingTranslationHandler,
  MissingTranslationHandlerParams,
  TranslateCompiler,
  TranslateLoader,
  TranslateModule,
  TranslateService
} from "@ngx-translate/core";
import { async, TestBed } from "@angular/core/testing";
import { MessageService } from './message-service';

@Injectable({ providedIn: "root" })
export class Logger {
  constructor(/* private readonly _log: NGXLogger */) {}
}

// @Injectable({ providedIn: "root" })
export class MyHandler {
  constructor(
    @Optional() private messageService: MessageService,
    private readonly _log: Logger
  ) {}
}

@NgModule({
  imports: [TranslateModule]
})
export class SharedModule {
  constructor(ts: TranslateService, private readonly _log: Logger) {}
}

describe("SharedModule", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          missingTranslationHandler: {
            provide: MissingTranslationHandler,
            useClass: MyHandler
          },
          useDefaultLang: false
        })
      ],
      providers: [{ provide: MessageService, useValue: { add: jest.fn() } }]
    }).compileComponents();
  }));

  it("should create", () => {
    expect(SharedModule).toBeDefined();
  });
});
