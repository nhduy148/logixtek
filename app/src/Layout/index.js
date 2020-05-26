export default function Layout({ container, router }) {
  return container.map( cpn => cpn.key === router.key && cpn.component )
}
