
function formatDateForFile(date) {
    const pad = (n) => (n < 10 ? `0${n}` : n);

    // Set the timezone to 'Asia/Bangkok' for Thai time
    const options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone: 'Asia/Bangkok',
    };

    const formattedDate = date.toLocaleString('th-TH', options);

    // Replace slashes with hyphens and underscores
    return formattedDate.replace(/[\/:]/g, '-');
}

function formatDateTime(datetimeString) {
    if (datetimeString == null) {
        return null
    } else {
        const options = {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            timeZone: 'Asia/Bangkok',
            hour12: true,
        };
        return new Date(datetimeString).toLocaleString("en-GB", options);
    }
}

function formatDate(datetimeString) {
    if (datetimeString == null) {
        return null
    } else {
        const options = {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            timeZone: 'Asia/Bangkok',
        };
        return new Date(datetimeString).toLocaleString("en-GB", options);
    }
}

module.exports = {formatDate, formatDateTime, formatDateForFile};