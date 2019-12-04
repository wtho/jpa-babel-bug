import { Injectable, InjectionToken, Inject } from "@angular/core";
import { TestBed, async } from "@angular/core/testing";

export const TOKEN = new InjectionToken<string>("TOKEN");

@Injectable({ providedIn: "root" })
export class TokenService {
  constructor(@Inject(TOKEN) token: string) {}
}

describe("TokenService", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        //   TokenService, // enable to get working in ts-jest and babel
        { provide: TOKEN, useValue: "https://github.com" }
      ]
    });
  }));

  it("should create", () => {
    expect(TestBed.get(TokenService)).toBeDefined();
  });
});
