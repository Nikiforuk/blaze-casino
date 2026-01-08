'use client';

import { useState } from 'react';

import Image from 'next/image';
import { UseFormRegisterReturn } from 'react-hook-form';

import styles from './AuthInput.module.scss';
import hideIcon from '../../assets/images/hide.png';
import showIcon from '../../assets/images/show.png';

interface AuthInputProps {
  id?: string;
  label?: boolean;
  labelText?: string;
  name?: string;
  placeholder?: string;
  autoComplete?: string;
  type?: string;
  register?: UseFormRegisterReturn;
  error?: string;
  isSuccess?: boolean;
}

export default function AuthInput({
  id,
  label = true,
  labelText,
  placeholder,
  autoComplete,
  type,
  register,
  error,
  isSuccess,
}: AuthInputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const isPasswordType = type === 'password';
  const inputType = isPasswordType && showPassword ? type : 'text';

  const getBorderStyle = () => {
    if (isFocused) {
      return { border: '1.5px solid #887BFF' };
    }
    if (isSuccess) {
      return { border: '1.5px solid #82C91E' };
    }
    return {};
  };

  return (
    <div className={styles.container}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {labelText}
        </label>
      )}
      <div className={styles.inputWrapper}>
        <input
          id={id}
          className={styles.input}
          placeholder={placeholder}
          autoComplete={autoComplete}
          type={inputType}
          style={getBorderStyle()}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...register}
        />
        {isPasswordType && (
          <button
            type="button"
            className={styles.toggleButton}
            onClick={() => setShowPassword(!showPassword)}
          >
            <Image
              src={showPassword ? hideIcon : showIcon}
              alt={showPassword ? 'Hide password' : 'Show password'}
              width={20}
              height={20}
            />
          </button>
        )}
      </div>
      {error && <span className={styles.errorText}>{error}</span>}
      {isSuccess && !error && <span className={styles.successText}>Successfully entered</span>}
    </div>
  );
}
