IF OBJECT_ID(N'[__EFMigrationsHistory]') IS NULL
BEGIN
    CREATE TABLE [__EFMigrationsHistory] (
        [MigrationId] nvarchar(150) NOT NULL,
        [ProductVersion] nvarchar(32) NOT NULL,
        CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY ([MigrationId])
    );
END;

GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20180928174827_InitialMigration')
BEGIN
    CREATE TABLE [Articles] (
        [Id] int NOT NULL IDENTITY,
        [Title] nvarchar(max) NULL,
        [Author] nvarchar(max) NULL,
        [Content] nvarchar(max) NULL,
        [DatePosted] datetime2 NOT NULL,
        [LastUpdated] datetime2 NOT NULL,
        CONSTRAINT [PK_Articles] PRIMARY KEY ([Id])
    );
END;

GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20180928174827_InitialMigration')
BEGIN
    CREATE TABLE [Games] (
        [Id] int NOT NULL IDENTITY,
        [Title] nvarchar(max) NULL,
        [Platforms] nvarchar(max) NULL,
        [Description] nvarchar(max) NULL,
        CONSTRAINT [PK_Games] PRIMARY KEY ([Id])
    );
END;

GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20180928174827_InitialMigration')
BEGIN
    CREATE TABLE [Users] (
        [Id] int NOT NULL IDENTITY,
        [FirstName] nvarchar(max) NULL,
        [LastName] nvarchar(max) NULL,
        [Username] nvarchar(max) NULL,
        [PasswordHash] varbinary(max) NULL,
        [PasswordSalt] varbinary(max) NULL,
        CONSTRAINT [PK_Users] PRIMARY KEY ([Id])
    );
END;

GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20180928174827_InitialMigration')
BEGIN
    CREATE TABLE [Image] (
        [Id] int NOT NULL IDENTITY,
        [FileName] nvarchar(max) NULL,
        [DateUploaded] datetime2 NOT NULL,
        [GameId] int NULL,
        CONSTRAINT [PK_Image] PRIMARY KEY ([Id]),
        CONSTRAINT [FK_Image_Games_GameId] FOREIGN KEY ([GameId]) REFERENCES [Games] ([Id]) ON DELETE NO ACTION
    );
END;

GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20180928174827_InitialMigration')
BEGIN
    CREATE INDEX [IX_Image_GameId] ON [Image] ([GameId]);
END;

GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20180928174827_InitialMigration')
BEGIN
    INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
    VALUES (N'20180928174827_InitialMigration', N'2.1.3-rtm-32065');
END;

GO

