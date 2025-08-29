-- Fix security warnings by setting search_path for all functions

-- Fix update_updated_at_column function
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

-- Fix handle_new_user function  
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.profiles (user_id, first_name, last_name, email)
    VALUES (
        NEW.id,
        NEW.raw_user_meta_data ->> 'first_name',
        NEW.raw_user_meta_data ->> 'last_name',
        NEW.email
    );
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

-- Fix create_default_categories function
CREATE OR REPLACE FUNCTION public.create_default_categories()
RETURNS TRIGGER AS $$
BEGIN
    -- Default expense categories
    INSERT INTO public.categories (user_id, name, type, color, icon) VALUES
    (NEW.id, 'Food & Dining', 'expense', '#EF4444', 'UtensilsCrossed'),
    (NEW.id, 'Transportation', 'expense', '#F97316', 'Car'),
    (NEW.id, 'Shopping', 'expense', '#EC4899', 'ShoppingBag'),
    (NEW.id, 'Entertainment', 'expense', '#8B5CF6', 'Music'),
    (NEW.id, 'Bills & Utilities', 'expense', '#06B6D4', 'Zap'),
    (NEW.id, 'Healthcare', 'expense', '#10B981', 'Heart'),
    (NEW.id, 'Education', 'expense', '#3B82F6', 'GraduationCap'),
    (NEW.id, 'Travel', 'expense', '#F59E0B', 'Plane'),
    (NEW.id, 'Other', 'expense', '#6B7280', 'MoreHorizontal');
    
    -- Default income categories
    INSERT INTO public.categories (user_id, name, type, color, icon) VALUES
    (NEW.id, 'Salary', 'income', '#10B981', 'Briefcase'),
    (NEW.id, 'Freelance', 'income', '#059669', 'Users'),
    (NEW.id, 'Investment', 'income', '#0891B2', 'TrendingUp'),
    (NEW.id, 'Business', 'income', '#7C3AED', 'Building2'),
    (NEW.id, 'Other Income', 'income', '#059669', 'PlusCircle');
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

-- Fix create_default_account function
CREATE OR REPLACE FUNCTION public.create_default_account()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.accounts (user_id, name, type, balance) VALUES
    (NEW.user_id, 'Main Account', 'bank', 0.00);
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;