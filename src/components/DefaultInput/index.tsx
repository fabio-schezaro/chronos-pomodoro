import styles from './styles.module.css';

type DefaultInputProps = {
  id: string;
  labelText?: string /* ? significa que a propriedade é opcional */;
} & React.ComponentProps<'input'>;

export function DefaultInput({
  id,
  type,
  labelText,
  ...props
}: DefaultInputProps) {
  return (
    <>
      {/* condição ? 'Verdadeiro' : 'Falso' */}
      {/* condição && 'Verdadeiro'*/} {/* Se não tiver valor para falso */}
      {labelText && <label htmlFor={id}>{labelText}</label>}
      <input className={styles.input} id={id} type={type} {...props} />
    </>
  );
}
