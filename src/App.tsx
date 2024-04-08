import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input/input'
import { FiLogOut } from 'react-icons/fi'

import s from './components/ui/button/button.module.scss'
import {Card} from "@/components/ui/card/card";
import {Table} from "@/components/ui/table";

const val = {
    heads: ['name', 'name', 'name', 'name', 'name', 'name',],
    values: [{
        "questionImg": "string",
        "question": "string",
        "answer": "string",
        "deckId": "string",
        "userId": "string",
        "grade": 0,
        "id": "string",
        "shots": 0,
        "answerImg": "string",
        "questionVideo": "string",
        "answerVideo": "string",
        "created": "2024-04-08T13:02:38.782Z",
        "updated": "2024-04-08T13:02:38.782Z"
    },
        {
            "grade": 0,
            "id": "string",
            "deckId": "string",
            "userId": "string",
            "question": "string",
            "answer": "string",
            "shots": 0,
            "answerImg": "string",
            "questionImg": "string",
            "questionVideo": "string",
            "answerVideo": "string",
            "created": "2024-04-08T13:02:38.782Z",
            "updated": "2024-04-08T13:02:38.782Z"
        }]
}



export function App() {
  return (
      <div>
          <div>
              <Table data={val}/>
          </div>
          {/*<Button as={'div'}>Normal Button</Button>*/}
          <div>
              <Button as={'a'} href={'https://google.com'}>
                  Link that looks a button
              </Button>
              <Button disabled={false} fullWidth={false} variant={'primary'}>
                  <FiLogOut className={s.icon}/>
                  Primary button
              </Button>
              <Button variant={'secondary'}>Secondary button</Button>
          </div>

          <div>
              <Input disabled fullWidth={false} label={'Default input'} variant={'default'}/>
              <Input disabled={false} fullWidth={false} label={'Default input'} variant={'default'}/>
              <Input disabled={false} fullWidth={false} label={'Password input'} variant={'password'}/>
              <Input disabled fullWidth={false} label={'Password input'} variant={'password'}/>
              <Input fullWidth={false} label={'Search input'} variant={'search'}/>
              <Input disabled fullWidth={false} label={'Search input'} variant={'search'}/>
              <Input fullWidth={false} label={'Search input'} variant={'search'} errorMessage={'Error'}/>
              <Input disabled fullWidth={true} label={'Search input'} variant={'search'}/>
          </div>
          <div>
              <Card/>
          </div>


      </div>
  )
}
