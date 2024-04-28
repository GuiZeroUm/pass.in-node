import { prisma } from '../src/lib/prisma'

async function seed() {
    await prisma.event.create({
        data: {
            id: 'b98c27cd-a902-4350-a785-0c0aab380f7c',
            title: 'Palestra tecnologia',
            slug: 'palestra-tec',
            details: 'Um evento para devs apaixonados por código!',
            maximumAttendees: 120,
        }
    })
}

seed().then(() => {
    console.log('Deu certo!')
    prisma.$disconnect()
})