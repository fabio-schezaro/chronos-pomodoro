type DefaultInputProps = {
  id: string;
  labelText?: string /* ? significa que a propriedade é opcional */;
} & React.ComponentProps<'input'>;

export function DefaultInput({
  id,
  type,
  labelText,
  ...rest
}: DefaultInputProps) {
  return (
    <>
      {/* condição ? 'Verdadeiro' : 'Falso' */}
      {/* condição && 'Verdadeiro'*/} {/* Se não tiver valor para falso */}
      {labelText && <label htmlFor={id}>{labelText}</label>}
      <input id={id} type={type} {...rest} />
    </>
  );
}
