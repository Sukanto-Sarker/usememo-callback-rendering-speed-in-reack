React.memo কী?

React.memo একটি component কে memoize করে।
মানে → props না বদলালে component আবার render হবে না।

Syntax
const MyComponent = React.memo((props) => {
  return <div>{props.text}</div>;
});


অথবা

const MyComponent = (props) => {
  return <div>{props.text}</div>;
};

export default React.memo(MyComponent);

উদাহরণ
const Title = React.memo(({ text }) => {
  console.log("Title Rendered");
  return <h1>{text}</h1>;
});


যদি parent re-render হয় কিন্তু text না বদলায় →
Title আবার render হবে না ✅

কখন memo ব্যবহার করবে?

✔ component বারবার re-render হয়
✔ component heavy (list, chart, big UI)
✔ props প্রায়ই একই থাকে

কখন ব্যবহার করবে না?

❌ ছোট component (button, h1, label)
❌ props নেই
❌ props সবসময় বদলায়



useCallback কী?

useCallback একটি function কে memory-তে ধরে রাখে,
যাতে parent re-render হলেও function নতুন করে তৈরি না হয়।

Syntax
const myFunction = useCallback(() => {
  // code
}, [dependencies]);

কেন দরকার?

React-এ

const click = () => {}


প্রতিবার render হলে নতুন function তৈরি হয় 😵
এটা React.memo করা child component কে ভেঙে দেয়।

ভুল উদাহরণ
const handleClick = () => {
  setCount(count + 1);
};

<Button onClick={handleClick} />


এখানে Button memo হলেও re-render হবে ❌

সঠিক পদ্ধতি
const handleClick = useCallback(() => {
  setCount(c => c + 1);
}, []);

<Button onClick={handleClick} />


এখন Button শুধু তখনই render হবে যখন দরকার হবে ✅

🔥 React.memo + useCallback একসাথে
Parent
const [count, setCount] = useState(0);

const increment = useCallback(() => {
  setCount(c => c + 1);
}, []);

<CounterButton onClick={increment} />

Child
const CounterButton = React.memo(({ onClick }) => {
  console.log("Button Rendered");
  return <button onClick={onClick}>Increase</button>;
});


এখন:

Parent re-render হলেও

Button re-render হবে না

যতক্ষণ onClick বদলায় না 🎯

🛑 সবচেয়ে বড় ভুল (Stale State)
useCallback(() => {
  setCount(count + 1);
}, []);


এটা ভুল ❌
কারণ count প্রথম render-এর মানেই আটকে থাকে।

✔ সঠিক:

setCount(c => c + 1);

🧠 Golden Rule

React.memo ব্যবহার করলে
তার props গুলো stable করতে হবে
→ useCallback বা useMemo দিয়ে
