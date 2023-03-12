import { useRouter } from 'next/router';

function ActiveLink({ children, href }) {
  const router = useRouter();
  const style = router.asPath === href ? 'font-bold underline' : 'font-bold';

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a href={href} onClick={handleClick} className={style}>
      {children}
    </a>
  );
}

export default ActiveLink;
