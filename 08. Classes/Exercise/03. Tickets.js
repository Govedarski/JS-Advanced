function sortTicket(ticketsInfo, criteria) {
    class Ticket {
        constructor(ticketData) {
            [this.destination, this.price, this.status] = ticketData.split('|');
        }
    }

    const sortingFunc = {
        destination(tickets) {
            return tickets.sort((a, b) => a.destination.localeCompare(b.destination));
        },
        price(tickets) {
            return tickets.sort((a, b) => a.price - b.price);
        },
        status(tickets) {
            return tickets.sort((a, b) => a.status.localeCompare(b.status));
        },
    };

   return  sortingFunc[criteria](ticketsInfo.map(ticketData => new Ticket(ticketData)));
}


function secondSortTicket(ticketsInfo, criteria) {
    class Ticket {
        constructor(ticketData) {
            [this.destination, this.price, this.status] = ticketData.split('|');
            this.price = Number(this.price)
        }
    }

    const sortingFunc = {
        destination(a, b) {
            return a.destination.localeCompare(b.destination);
        },
        price(a,b) {
            return  a.price - b.price;
        },
        status(a,b) {
            return  a.status.localeCompare(b.status);
        },
    };

    return  ticketsInfo
        .map(ticketData => new Ticket(ticketData))
        .sort(sortingFunc[criteria]);
}





console.log(sortTicket(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination'));
