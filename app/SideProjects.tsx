import Link from 'next/link';

export default function SideProjects() {
  return (
    <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
      <div className='boxComponent rounded-lg p-4 ring-1 ring-neutral-300'>
        <div className='flex h-full flex-col justify-between space-y-3'>
          <Link href='https://apps.apple.com/app/id1538561618?mt=8'>
            <div className='space-y-3'>
              <div className='flex items-center justify-between'>
                <p className='text-2xl font-medium'>Mileways</p>
                <div className='flex space-x-3 dark:text-neutral-800'>
                  <p className='rounded bg-purple-200 px-2 py-1 text-xs'>iOS</p>
                </div>
              </div>
              <div>
                <p className='text-base font-medium'>All About Flights</p>
                <p className='text-base'>
                  Everything you need to know about your flights.
                </p>
              </div>
            </div>
          </Link>
          <div className='flex items-center space-x-3 pt-2 text-xs uppercase dark:text-neutral-800'>
            <p className='rounded bg-purple-200 px-2 py-1 text-purple-800'>
              SwiftUI
            </p>
            <p className='rounded bg-green-200 px-2 py-1 text-green-800'>
              Java
            </p>
          </div>
        </div>
      </div>
      <div className='boxComponent rounded-lg p-4 ring-1 ring-neutral-300'>
        <div className='flex h-full flex-col justify-between space-y-3'>
          <Link href='https://freelancely.app'>
            <div className='space-y-3'>
              <div className='flex items-center justify-between'>
                <p className='text-2xl font-medium'>Freelancely</p>
                <div className='flex space-x-3 dark:text-neutral-800'>
                  <p className='rounded bg-blue-200 px-2 py-1 text-xs uppercase'>
                    Web
                  </p>
                </div>
              </div>
              <div>
                <p className='text-base font-medium'>
                  Bookkepping for freelancers
                </p>
                <p className='text-base'>
                  Keep track of your billable hours, invoices & payments.
                </p>
              </div>
            </div>
          </Link>
          <div className='flex items-center space-x-3 pt-2 text-xs uppercase dark:text-neutral-800'>
            <p className='rounded bg-blue-200 px-2 py-1 text-blue-800'>
              NextJS
            </p>
            <p className='rounded bg-red-200 px-2 py-1 text-red-800'>NestJS</p>
          </div>
        </div>
      </div>
      <div className='boxComponent rounded-lg p-4 ring-1 ring-neutral-300'>
        <div className='flex h-full flex-col justify-between space-y-3'>
          <Link href='https://flight-analysis-app.vercel.app/'>
            <div className='space-y-3'>
              <div className='flex items-center justify-between'>
                <p className='text-2xl font-medium'>BusinessForLess</p>
                <div className='flex space-x-3 dark:text-neutral-800'>
                  <p className='rounded bg-blue-200 px-2 py-1 text-xs uppercase'>
                    Web
                  </p>
                </div>
              </div>
              <div>
                <p className='text-base font-medium'>
                  Cheapest Business Class Flights
                </p>
                <p className='text-base'>
                  Cheap flights for people with flexible dates & airports.
                </p>
              </div>
            </div>
          </Link>
          <div className='flex items-center space-x-3 pt-2 text-xs uppercase dark:text-neutral-800'>
            <p className='rounded bg-blue-200 px-2 py-1 text-blue-800'>
              NextJS
            </p>
            <p className='rounded bg-yellow-200 px-2 py-1 text-yellow-800'>
              Python
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
