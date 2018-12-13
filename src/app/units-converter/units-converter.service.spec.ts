
import { TestBed } from '@angular/core/testing';
import { UnitsConverorService } from './units-converter.service';

describe('WorkItemService', () => {
  let unitsConverorService: UnitsConverorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UnitsConverorService
      ],

    }).compileComponents();

    unitsConverorService = TestBed.get(UnitsConverorService);
  });


  describe('UnitsConverorService', () => {
    it('should be defined', () => {
      expect(unitsConverorService).toBeDefined();
    });

    describe('length, in to mm', () => {
      it('1 in to mm', () => {
        expect(unitsConverorService.init(1).from('in').to('mm').round()).toBe(25.40);
      });

      it('2 in to mm', () => {
        expect(unitsConverorService.init(2).from('in').to('mm').round()).toBe(50.80);
      });

      it('2.5 in to mm', () => {
        expect(unitsConverorService.init(2.5).from('in').to('mm').round()).toBe(63.50);
      });

      it('3 in to mm', () => {
        expect(unitsConverorService.init(3).from('in').to('mm').round()).toBe(76.20);
      });
    });


    describe('pressure', () => {
      it('1 psi to N/mm2', () => {
        expect(unitsConverorService.init(1).from('psi').to('N/mm2').round()).toBe(0.01);
      });

      it('2 psi to N/mm2', () => {
        expect(unitsConverorService.init(2).from('psi').to('N/mm2').round()).toBe(0.01);
      });

      it('2.5 psi to N/mm2', () => {
        expect(unitsConverorService.init(2.5).from('psi').to('N/mm2').round()).toBe(0.02);
      });

      it('3 psi to N/mm2', () => {
        expect(unitsConverorService.init(3).from('psi').to('N/mm2').round()).toBe(0.02);
      });

      it('100 psi to N/mm2', () => {
        expect(unitsConverorService.init(100).from('psi').to('N/mm2').round()).toBe(0.69);
      });

      it('200 psi to N/mm2', () => {
        expect(unitsConverorService.init(200).from('psi').to('N/mm2').round()).toBe(1.38);
      });
    });

    describe('area, in2	mm2', () => {
      it('0.2 in2 mm2', () => {
        expect(unitsConverorService.init(0.2).from('in2').to('mm2').round()).toBe(129.03);
      });

      it('0.1 in2 mm2', () => {
        expect(unitsConverorService.init(0.1).from('in2').to('mm2').round()).toBe(64.52);
      });

      it('1 in2 mm2', () => {
        expect(unitsConverorService.init(1).from('in2').to('mm2').round()).toBe(645.16);
      });

      it('2 in2 mm2', () => {
        expect(unitsConverorService.init(2).from('in2').to('mm2').round()).toBe(1290.32);
      });

      it('250 in2 mm2', () => {
        expect(unitsConverorService.init(250).from('in2').to('mm2').round()).toBe(161290.16);
      });

      it('300 in2 mm2', () => {
        expect(unitsConverorService.init(300).from('in2').to('mm2').round()).toBe(193548.19);
      });
    });

    describe('mass, lb kN', () => {
      it('100 lb Nm', () => {
        expect(unitsConverorService.init(100).from('lb').to('kN').round()).toBe(0.44);
      });

      it('200 lb Nm', () => {
        expect(unitsConverorService.init(200).from('lb').to('kN').round()).toBe(0.89);
      });

      it('250 lb Nm', () => {
        expect(unitsConverorService.init(250).from('lb').to('kN').round()).toBe(1.11);
      });

      it('300 lb Nm', () => {
        expect(unitsConverorService.init(300).from('lb').to('kN').round()).toBe(1.33);
      });

      it('3000 lb Nm', () => {
        expect(unitsConverorService.init(3000).from('lb').to('kN').round()).toBe(13.34);
      });
    });
  });
});
