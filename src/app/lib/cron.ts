import cron from 'node-cron';

export const deleteUnverifiedDoctors = async()=>{
    cron.schedule('*/2 * * * * *', () => {
  		console.log('Doctor delete');
		});
}