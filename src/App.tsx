import { Button } from '@/components/ui/button'

export function App() {
  return (
    <div>
      <Button as={'h1'}>Normal Button</Button>
      <Button as={'a'} href={'https://google.com'}>
        Link that looks a button
      </Button>
      <Button>123</Button>
    </div>
  )
}
