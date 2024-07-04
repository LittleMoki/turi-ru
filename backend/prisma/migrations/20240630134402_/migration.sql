-- AddForeignKey
ALTER TABLE "t_orders" ADD CONSTRAINT "t_orders_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "t_users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
