import { NgModule, Injectable, Optional } from "@angular/core";
import { TestBed, async } from "@angular/core/testing";

@Injectable()
export class MessageService {}

export abstract class BaseHandler {}

// @Injectable() // enable to get working in ts-jest and babel
export class MyHandler {
  constructor(@Optional() private messageService: MessageService) {}
}

@NgModule({})
export class SharedModule {
  constructor(ts: BaseHandler) {}
}

describe("SharedModule", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [MessageService, { provide: BaseHandler, useClass: MyHandler }]
    }).compileComponents();
  }));

  it("should create", () => {
    expect(SharedModule).toBeDefined();
  });
});
