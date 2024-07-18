export interface IProfile {
    name : string 
    age : number
    school: string
    hobby? : string
}
export interface IProfile2 {
    name? : string 
    age? : number
    school? : string
    hobby? : string
}
//아 너무 비슷한데.. 두개 만들어야 하나...? 
// utility type으로 해결! 

// 1. Partial타입 : 다 물음표로 바뀜 
type aaa = Partial<IProfile>


// 2. Required타입 : 물음표를 없애줌 
type bbb = Required<IProfile>

// 3. Pick타입 : 몇개만 골라옴 
type ccc = Pick<IProfile, "name" | "age">

// 4. Omit타입 : 몇개만 빼버림
type ddd = Omit<IProfile, "school"> 

// 5. Record타입 : 객체의 key와 value값의 타입 지정
type eee = "철수" | "영희" | "훈이" // Union 타입 
let child1 : string = "사과" //걍 다됨
let child2 : eee = "영희" //3개중에 선택해야함. 

type fff = Record<eee, IProfile>
// 앞 eee는 key에 대한 type을 (즉 앞이 key타입 결정)
// 뒤 IProfile은 value에 대한 type을 정의하게 된다. (뒤 key에 대한 타입을 결정)
//다만 IProfile또한 객체 정의이기 때문에 , 객체 안의 객체에 대한 정의이다. 

//다만 쉽게 생각해서, 각각 key와 value에 대한 타입을 결정한다고 생각하면 된다. 


// 6. keyof타입 : 객체에 있는 key들만 뽑아서 union으로 만든다. 
type ggg = keyof IProfile // "name" | "age" | "school" | "hobby"
let myprofile : ggg = 'hobby'

// 7. type vs interface 차이 => interface는 선언병합 가능 / type은 불가 
export interface IProfile { 
    candy : number //선언병합으로 추가됨 
}

//8. 배운거 응용 
let profile : Partial<IProfile> = {
    candy : 10
}
//
