import { Button } from '@/components/atomics/button'
import Title from '@/components/atomics/title'
import DataTransaction from '@/json/city-transaction.json'
import { CityCenterProps } from '@/interfaces/city-center'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from '@/components/atomics/pagination'
import CardTransaction from '@/components/molecules/card/card-transaction'
import { CityTransactionProps } from '@/interfaces/city-transaction'
import CardEmpty from '@/components/molecules/card/card-empty'

function MyTransactions() {
  return (
    <main>
      <div className='flex items-center justify-between'>
        <Title
          section='admin'
          title='My Transactions'
          subtitle='Manage your house and get money'
        />
      </div>

      <div className='mt-[30px] space-y-5'>
        {
          DataTransaction.data.slice(0, 4).map((item: CityTransactionProps, index: number) => (
            <CardTransaction
              key={index}
              image={item.image}
              title={item.title}
              location={item.location}
              days={item.days}
              price={item.price}
              status={item.status}
            />
          ))
        }
        {/* <CardEmpty/> */}
      </div>

      <Pagination className='mt-[30px]'>
        <PaginationContent>
          <PaginationItem>
            <PaginationLink href="#" isActive>1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">10</PaginationLink>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </main>
  )
}

export default MyTransactions
