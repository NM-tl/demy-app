import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../../shared/button/Button";
import useAuth from "./helpers/useAuth";

export default function SignUp() {  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const { errors, validate } = useAuth();

  useEffect(() => {
    setIsFormValid(validate(name, email, password));
  }, [name, email, password, validate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate(name, email, password)) {
      console.log("Form submitted successfully");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <div className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Full name"
          className="h-[60px] border px-5"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <span className="text-red-500">{errors.name}</span>}
        
        <input
          type="text"
          placeholder="Email"
          className="h-[60px] border px-5"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <span className="text-red-500">{errors.email}</span>}
        
        <input
          type="password"
          placeholder="Password"
          className="h-[60px] border px-5"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <span className="text-red-500">{errors.password}</span>}
        
        <div className="flex">pass progress</div>
      </div>
      
      <label htmlFor="subscribe" className="flex gap-2 items-start text-sm">
        <input type="checkbox" id="subscribe" className="mt-1" />
        Send me special offers, personalized recommendations, and learning tips.
      </label>
      <Button 
        type="submit" 
        border={false} 
        bold={true} 
        background="btn" 
        additional="w-full h-[48px]" 
        name="Sign up" 
        disabled={!isFormValid}
      />
      <p className="text-center text-xs">
        By signing up, you agree to our <Link to="/" className="text-courseName underline">Terms of Use</Link> and <Link to="/" className="text-courseName underline">Privacy Policy</Link>.
      </p>
      <div className="mt-6 text-center">
        <span>
          Already have an account? <Link to="/" className="text-courseName underline font-bold">Log in</Link>
        </span>
      </div>
    </form>
  )
}
