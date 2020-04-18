import { TestingComponent } from "./Testing.component";
describe("Calculator testing", () => {
    describe("add func testing", () => {
        it("10+10 should be eual to 20",()=>{
            let obj:TestingComponent=new TestingComponent();
            const result=obj.add(10,10);
            
            expect (result).toBe(20);
        })
    })
    describe("sub ",()=>{
        it("sub is 0",()=>{
            let obj:TestingComponent=new TestingComponent();
            const result=obj.sub(10,10);
            expect(result).toBe(0);
        })

    });
    describe("Check",()=>{
        it("check is",()=>{
            let obj:TestingComponent=new TestingComponent();
            const result=obj.arr;
            expect(result).toContain(30);
        })
    });


});
